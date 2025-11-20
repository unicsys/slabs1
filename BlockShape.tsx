import json
from datetime import datetime

def calculate_station_utilization(data, ate_sn, part_no, target_date):
    target_date = datetime.strptime(target_date, "%Y-%m-%d").date()
    total_runtime_seconds = 0

    for record in data:
        if record.get("ateSn") != ate_sn:
            continue
        
        if part_no and record.get("ateCpn") != part_no:
            continue

        try:
            start_dt = datetime.strptime(record.get("startDateTime"), "%Y-%m-%dT%H:%M:%S")
            end_dt = datetime.strptime(record.get("endDateTime"), "%Y-%m-%dT%H:%M:%S")
        except:
            continue
        
        if start_dt.date() == target_date or end_dt.date() == target_date:
            if "runTime" in record and record["runTime"].isdigit():
                total_runtime_seconds += int(record["runTime"])
            else:
                total_runtime_seconds += int((end_dt - start_dt).total_seconds())

    total_day_seconds = 86400
    utilization = round((total_runtime_seconds / total_day_seconds) * 100, 2)

    return {
        "date": str(target_date),
        "ateSn": ate_sn,
        "ateCpn": part_no,
        "run_time_hours": round(total_runtime_seconds / 3600, 2),
        "utilization_percent": utilization
    }


if __name__ == "__main__":
    with open("sample.json", "r") as f:
        data = json.load(f)

    result = calculate_station_utilization(
        data=data,
        ate_sn="006",
        part_no="822-0573-006",
        target_date="2007-08-23"
    )

    print(f"Date: {result['date']}")
    print(f"Station Serial Number: {result['ateSn']}")
    print(f"Part Number: {result['ateCpn']}")
    print(f"Total Run Time (hours): {result['run_time_hours']}")
    print(f"Utilization: {result['utilization_percent']}%")


