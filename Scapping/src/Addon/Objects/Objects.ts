import { Daily } from "../../Service/Daily/Daily";
import { Hourly } from "../../Service/Hourly/Hourly";
import { Locations } from "../../Service/Locations/Locations";
import { Month } from "../../Service/Monthly/Monthly";
import { Today } from "../../Service/Today/Today";

export let todayObj: Today = new Today();
export let hourlyObj: Hourly = new Hourly();
export let dailyObj: Daily = new Daily();
export let locationObj: Locations = new Locations();
export let monthlyObj: Month = new Month()