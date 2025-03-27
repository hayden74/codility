/*
# Parking Fee Calculation - Time Difference + Billing Logic

## Problem Description:
- A car enters a parking lot at time `E` and leaves at time `L` (both in "HH:MM" format).
- The fee is structured as follows:
  - Entrance fee: 2 euros
  - First hour: 3 euros
  - Every subsequent **started hour**: 4 euros
- Compute the total parking fee the driver has to pay.

## Key Concepts:
- **Time Conversion**: Convert `HH:MM` to **total minutes** to compute the duration.
- **Rounding**: Use `Math.ceil()` to ensure **started hours are charged fully**, even if partial.
- **Billing Logic**:
  - If total time is within 1 hour, charge only the entrance + first hour.
  - If more, charge additional hourly fees for each **extra started hour**.

## Edge Cases:
- If `E === L`, minimum billing applies (first hour charged).
- If parked exactly 60 minutes, no extra hourly fee.
- If parked 1 hour and 1 minute → 2 total hours → one extra hour charged.

## Complexity:
- **Time Complexity: O(1)** (Simple parsing and arithmetic).
- **Space Complexity: O(1)**.
---
*/

function solution(E: string, L: string): number {
    const entranceFee = 2;
    const firstHourFee = 3;
    const hourlyFee = 4;

    // Convert entry time to total minutes
    const [eh, em] = E.split(':').map(Number);
    const eMin = eh * 60 + em;

    // Convert exit time to total minutes
    const [lh, lm] = L.split(':').map(Number);
    const lMin = lh * 60 + lm;

    // Calculate total duration in started hours
    const totalHours = Math.ceil((lMin - eMin) / 60);
    const extraHours = totalHours - 1;

    // Total fee = entrance + first hour + extra hourly fees
    return entranceFee + firstHourFee + (extraHours * hourlyFee);
}
