from django.db import transaction
from rest_framework.exceptions import ValidationError


def deduct_bus_capacity(bus, seat_booked):
    """
        Checks if bus capacity is sufficient, then deducts the booked seats.
        Raises ValidationError if insufficient seats.
        Returns the updated BusCapacity object.
    """
    from .models import BusCapacity
    with transaction.atomic():
        bus_capacity, _ = BusCapacity.objects.get_or_create(bus=bus, defaults={'available_capacity': bus.capacity})
        if bus_capacity.available_capacity < seat_booked:
            raise ValidationError(f'Not enough seats available for {bus.bus_number}')
        bus_capacity.available_capacity -= seat_booked
        bus_capacity.save()
    return bus_capacity

def restore_bus_capacity(bus, seat_canceled):
    """
       Restores bus capacity by the canceled seats (up to max bus capacity).
       Returns the updated BusCapacity object.
    """
    with transaction.atomic():
        from .models import BusCapacity
        bus_capacity, _ = BusCapacity.objects.select_for_update().get_or_create(bus=bus, defaults={'available_capacity': bus.capacity})
        new_capacity = bus_capacity.available_capacity + seat_canceled
        bus_capacity.available_capacity = min(new_capacity, bus.capacity)
        bus_capacity.save()
    return bus_capacity

def pick_fare_for_booking(ticket_booking):
    """
    Example logic for deciding which Fare to assign to this booking.
    Could be distance-based, route-based, or a fallback.
    """
    from .models import Fare  # local import to avoid circular references

    # e.g., if you have logic to compute a distance from the booking's source/destination:
    # distance = compute_distance(ticket_booking.source_station, ticket_booking.destination_station)
    # Then filter Fares to find one matching or exceeding that distance.

    # For now, let's do a naive approach: pick the first Fare in DB
    possible_fare = Fare.objects.first()  # or some custom filter
    return possible_fare

