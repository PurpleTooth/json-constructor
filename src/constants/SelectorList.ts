export const selectorList = [
   {
      displayedName: "Логотип РСДУ",
      type: "Labels.Rsdu5Logo",
      id: "W010",
      x: 0,
      y: 2,
      width: 1,
      height: 1,
      widget: {
      type: "Labels.Rsdu5Logo",
      options: {}
      }
   },
   {
      displayedName: "Дата и время",
      type: "Labels.DataTime",
      id: "DATETIME",
      x: 1704,
      y: 0,
      width: 200,
      height: 2,
      options: {
         format: "DD.MM.YYYY HH:mm:ss",
         color: "#0000ff",
         fontSize: 18,
         fontWeight: 600,
         fontStyle: "normal",
         textAlign: "right",
      },
   },
   {
      
      displayedName: "Текст",
      id: "W006",
      x: 0,
      y: 2,
      width: 1,
      height: 2,
     
      widget: {
         type: "Labels.SimpleText",
         options: {
            text: "ПС КВАРЦ 110 кВ",
            color: "#0000ff",
            fontSize: 30,
            fontWeight: 600,
            fontStyle: "normal",
            textAlign: "justify",
         },
   },
},
   {
      displayedName: "Телеизмерение",
      id: "W006",
      x: 0,
      y: 2,
      width: 1,
      height: 2,
     
      widget: {
         type: "Analogs.SingleValue",
         options: {
            title: {
               text: "P факт",
               color: "#ff0000",
               fontSize: 25,
               fontWeigh: 400,
               fontStyle: "normal",
               verticalAlign: "center",
               horizontalAlign: "left",
            },
            value: {
               digitsAfterDot: 3,
               color: "#00ff00",
               fontSize: 30,
               fontWeight: 800,
               fontStyle: "italic",
               verticalAlign: "center",
               horizontalAlign: "center",
               blockHeight: 70,
               blockWidht: 70,
               marginRight: 10,
            },
            unit: {
               text: "МВт",
               color: "#0000ff",
               fontSize: 30,
               fontWeight: 800,
               fontStyle: "normal",
               verticalAlign: "center",
               horizontalAlign: "right",
            },
            rtdata: [
               {
                  tag: "",
                  tableId: 29,
                  paramId: 5010404,
                  gtopt: "",
               },
            ],
         },
      }
      
   },
   {
      displayedName: "Таблица",
      type: "Analogs.TableGtp",
      id: "W008",
      x: 2,
      y: 2,
      width: 1,
      height: 2,
      widget: {
         type: "Analogs.TableGtp",
         options: {
            table: {
               headerHeight: 30,
               columns: [
                  {
                     width: 20
                  },
                  {
                     width: 40,
                     header: {
                        label: "P,МВт",
                        fontSize: 16,
                        fontWeight: 400
                     },
                     body: {
                        countNumbersAfterDot: 3,
                        fontSize: 16,
                        fontWeight: 600
                     }
                  },
                  {
                     width: 40,
                     header: {
                        label: "Q, МВАр",
                        fontSize: 16,
                        fontWeight: 400
                     },
                     body: {
                        countNumbersAfterDot: 1,
                        fontSize: 16,
                        fontWeight: 600
                     }
                  }
               ],
               rows: [
                  {
                     columnsData: [
                        {
                           label: "ТГ-2"
                        },
                        {
                           tag: "pTg2"
                        },
                        {
                           tag: "qTg2"
                        }
                     ]
                  },
                  {
                     columnsData: [
                        {
                           label: "ТГ-3"
                        },
                        {
                           tag: "pTg3"
                        },
                        {
                           tag: "qTg3"
                        }
                     ]
                  }
               ]
            }
         },
         rtdata: [
            {
               tag: "pTg2",
               tableId: 1320,
               paramId: 11,
               gtopt: ""
            },
            {
               tag: "qTg2",
               tableId: 1320,
               paramId: 163,
               gtopt: ""
            },
            {
               tag: "pTg3",
               tableId: 1320,
               paramId: 12,
               gtopt: ""
            },
            {
               tag: "qTg3",
               tableId: 1320,
               paramId: 164,
               gtopt: ""
            }
         ]
      }
   },

   {
      displayedName: "Действующая команда",
      type: "Labels.LastCommand",
      id: "W004",
      x: 0,
      y: 3,
      width: 1,
      height: 2,
      widget: {
         type: "Labels.LastCommand",
         options: {
            gtpId: 3,
            technologyId: "P",
            initiativeFontSize: 25,
            initiativeColor: "#FF0000",
            titleFontSize: 25,
            titleColor: "#00FF00",
            receivedDateFontSize: 12,
            receivedDateColor: "#0000FF",
            receivedTimeFontSize: 14,
            receivedTimeColor: "#0000FF",
            completedTimeFontSize: 20,
            completedTimeColor: "#0000FF"
         }
      }
   },
   {
      displayedName: "График активной мощности ГОУ",
      type: "Charts.ChartGtp",
      id: "W013",
      x: 0,
      y: 4,
      width: 2,
      height: 6,
      widget: {
         type: "Charts.ChartGtp",
         options: {
            text: "P факт",
            interval: "day",
            intervalBefore: 60,
            intervalAfter: 60
         },
         archives: [
            {
               tag: "pmin",
               tableId: 1320,
               paramId: 220,
               gtopt: "GLT_ANALOG_OPT_CUR1"
            },
            {
               tag: "pmax",
               tableId: 1320,
               paramId: 221,
               gtopt: "GLT_ANALOG_OPT_CUR1"
            },
            {
               tag: "ddg",
               tableId: 1320,
               paramId: 219,
               gtopt: "GLT_ANALOG_OPT_CUR1"
            },
            {
               tag: "udg",
               tableId: 1320,
               paramId: 222,
               gtopt: "GLT_ANALOG_OPT_CUR1"
            },
            {
               tag: "p",
               tableId: 1320,
               paramId: 144,
               gtopt: "GLT_ANALOG_OPT_MEAN1"
            }
         ],
         rtdata: [
            {
               tag: "p",
               tableId: 1320,
               paramId: 144,
               gtopt: ""
            }
         ]
      }
   },
   {
      displayedName: "График",
      type: "Charts.SimpleChart",
      id: "W0011",
      x: 1,
      y: 1,
      width: 1,
      height: 4,
      widget: {
         type: "Charts.SimpleChart",
         options: {
            text: "P генераторов, МВт",
            interval: "day",
            intervalBefore: 135,
            intervalAfter: 135,
            legend: {
               show: true,
               position: "top"
            },
            yaxis: {
               axisName: "МВт"
            },
            seriesOptions: {
               ptg2: {
                  name: "P ТГ2",
                  lineColor: "blue",
                  lineWidth: 1
               },
               ptg4: {
                  name: "P ТГ4",
                  lineColor: "purple",
                  lineWidth: 1
               }
            }
         },
         archives: [
            {
               tag: "ptg2",
               tableId: 1320,
               paramId: 11,
               gtopt: "GLT_ANALOG_OPT_MEAN1"
            },
            {
               tag: "ptg4",
               tableId: 1320,
               paramId: 13,
               gtopt: "GLT_ANALOG_OPT_MEAN1"
            }
         ]
      }
   },
]
export default selectorList
