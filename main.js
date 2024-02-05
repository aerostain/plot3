const config={resposive:true};
// Bar Chart
const barChartTrace1={
    x:["Jan","Feb","Mar"],
    y:[20,14,23],
    name:"SF Zoo",
    type:"bar",
    marker:{
        color:"#ea335d",
    },
};

const barChartTrace2={
    x:["Jan","Feb","Mar"],
    y:[20,14,23],
    name:"SF Zoo",
    type:"bar",
    marker:{
        color:"#ea335d",
        opacity:0.6,
    },
};

const barChartData=[barChartTrace1,barChartTrace2];
const layout={
    barmode:"stack",
    paper_bgcolor:"#172042",
    plot_bgcolor:"#172042",
    showlegend:false,
    margin:{
        l:30,
        r:30,
        b:30,
        t:30,
        pad:1,
    },
    font:{
        color:"#6b6f8a",
    },
    height:200,
    width:240
};

Plotly.newPlot("barChart",barChartData,layout,config);

// Pie Chart

const pieChartData=[
    {
        values:[19,26,55],
        labels:["March","April","June"],
        type:"pie"
    }
];

const pieChartLayout={
    paper_bgcolor:"#172042",
    plot_bgcolor:"#172042",
    piecolorway:["#ea335d","#03dcee","#178add"],
    showlegend:false,
    margin:{
        l:10,
        r:10,
        b:10,
        t:10,
        pad:1
    },
    height:200,
    width:240
};

Plotly.newPlot("pieChart",pieChartData,pieChartLayout,config);

// Donus Chart

const donutChartData=[
    {
        values:[10,40,50],
        labels:["Sep","Oct","Nov"],
        hole:0.4,
        type:"pie"
    }
];

Plotly.newPlot("donutChart",donutChartData,pieChartLayout,config)