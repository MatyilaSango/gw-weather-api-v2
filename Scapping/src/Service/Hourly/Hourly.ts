import axios from "axios";
import cheerio from "cheerio";
import { deleteHourly, getHourly, setHourly } from "../../Storage";
import { hourlydataType, hourlyDataType } from "../../../../Types/types";
import HourlyModel from "../../Models/Hourly";

export class Hourly {
  private _hourlyData: hourlyDataType = new HourlyModel().model;
  constructor() {}

  public isFreshData = (data: hourlyDataType): boolean => {
    if (data) {
      let date_now: Date = new Date();
      var data_hour: number =
        data.data[0].hour.split(" ")[1] === "PM"
          ? Number(data.data[0].hour.split(" ")[0]) + 12
          : Number(data.data[0].hour.split(" ")[0]);
      if (date_now.getHours() > data_hour) {
        deleteHourly(data.search_parameter);
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  public scrapHourly = async (search: string): Promise<void> => {
    if (this.isFreshData(getHourly(search))) {
      this._hourlyData = getHourly(search);
    } else {
      let hourlyLink = await axios
        .get(`https://www.accuweather.com/en/search-locations?query=${search}`)
        .then((prom) => prom.data)
        .then((results) => {
          let $ = cheerio.load(results);
          return (
            "https://www.accuweather.com" +
            $(".subnav-item").toArray()[1].attribs.href
          );
        });

      let hourlyresponse = await axios
        .get(hourlyLink)
        .then((prom) => prom.data)
        .then((results) => results);

      var that = this;
      let $ = cheerio.load(hourlyresponse);

      that._hourlyData.data = [];

      $(".hourly-wrapper")
        .find(".accordion-item")
        .each(function (this: any) {
          let tempHourlyData: hourlydataType = {
            hour: "",
            temp: "",
            precip: "",
            type: "",
            real_feel: "",
            real_feel_shade: "",
            max_uv_index: "",
            wind: "",
            wind_gusts: "",
            humidity: "",
            indoor_humidity: "",
            dew_point: "",
            air_quality: "",
            cloudy_cover: "",
            visibility: "",
            cloud_ceiling: "",
            icon: "",
          };

          tempHourlyData.hour = $(this)
            .find(".hourly-card-top")
            .find(".date")
            .text();
          tempHourlyData.temp = $(this)
            .find(".hourly-card-top")
            .find(".temp")
            .text();
          tempHourlyData.precip = $(this)
            .find(".hourly-card-top")
            .find(".precip")
            .text()
            .trim();
          tempHourlyData.type = $(this).find(".phrase").text();
          tempHourlyData.icon =
            "https://www.accuweather.com" +
            <string>$(this).find(".hourly-card-top").find("svg").data("src");

          $(this)
            .find(`.panel`)
            .each(function (this) {
              let next_child: number = 1;
              while (next_child <= 12) {
                let tempdata: string = $(this)
                  .find(`p:nth-child(${next_child})`)
                  .text();
                if (tempdata.includes("RealFeel®")) {
                  tempHourlyData.real_feel = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("RealFeel Shade")) {
                  tempHourlyData.real_feel_shade = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Max UV Index")) {
                  tempHourlyData.max_uv_index = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Wind Gusts")) {
                  tempHourlyData.wind_gusts = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Wind")) {
                  tempHourlyData.wind = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Indoor Humidity")) {
                  tempHourlyData.indoor_humidity = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Humidity")) {
                  tempHourlyData.humidity = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Dew Point")) {
                  tempHourlyData.dew_point = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Air Quality")) {
                  tempHourlyData.air_quality = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Cloud Cover")) {
                  tempHourlyData.cloudy_cover = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Visibility")) {
                  tempHourlyData.visibility = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else if (tempdata.includes("Cloud Ceiling")) {
                  tempHourlyData.cloud_ceiling = $(this)
                    .find(`p:nth-child(${next_child})`)
                    .find("span")
                    .text();
                  next_child += 1;
                  continue;
                } else {
                  next_child += 1;
                }
              }
            });

          that._hourlyData.data.push(tempHourlyData);
        });
      this._hourlyData.search_parameter = search;
      setHourly(this._hourlyData);
    }
  };

  public getData = (location: string): hourlyDataType => {
    return getHourly(location);
  };
}
