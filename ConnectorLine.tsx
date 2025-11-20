

import json
from datetime import datetime

def calculate_station_utilization(data, ate_sn, part_no, target_date):
    target_date = datetime.strptime(target_date, "%Y-%m-%d").date()
    total_runtime_seconds = 0
    matching_records = []

    for record in data:
        if record.get("ateSn") != ate_sn:
            continue
        
        if part_no and record.get("ateCpn") != part_no:
            continue

        try:
            start_dt = datetime.strptime(record["startDateTime"], "%Y-%m-%dT%H:%M:%S")
            end_dt = datetime.strptime(record["endDateTime"], "%Y-%m-%dT%H:%M:%S")
        except:
            continue

        if start_dt.date() == target_date or end_dt.date() == target_date:
            matching_records.append(record)
            if record.get("runTime") and record["runTime"].isdigit():
                total_runtime_seconds += int(record["runTime"])
            else:
                total_runtime_seconds += int((end_dt - start_dt).total_seconds())

    utilization = round((total_runtime_seconds / 86400) * 100, 2)

    return matching_records, {
        "date": str(target_date),
        "ateSn": ate_sn,
        "ateCpn": part_no,
        "run_time_hours": round(total_runtime_seconds / 3600, 2),
        "utilization_percent": utilization
    }


if __name__ == "__main__":
    with open("sample.json", "r") as f:
        data = json.load(f)

    records, summary = calculate_station_utilization(
        data=data,
        ate_sn="006",
        part_no="822-0573-006",
        target_date="2007-08-23"
    )

    print(f"\nStation {summary['ateSn']} | Part {summary['ateCpn']} | Date {summary['date']}")
    print(f"Total records found: {len(records)}")
    print(f"Total Run Time (hours): {summary['run_time_hours']}")
    print(f"Utilization: {summary['utilization_percent']}%\n")

    if records:
        print("Records on that day:")
        for r in records:
            print(f"- Product {r['productId']} | UUT {r['uutSn']} | "
                  f"Start {r['startDateTime']} | End {r['endDateTime']} | "
                  f"RunTime {r['runTime']} sec")
