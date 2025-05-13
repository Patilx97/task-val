import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = () => {
  // Sample data similar to the Nivo example
  const data = [
    {
      country: 'AD',
      'hot dog': 83,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 127,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 143,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 55,
      kebabColor: 'hsl(340, 70%, 50%)',
      fries: 35,
      friesColor: 'hsl(72, 70%, 50%)',
      donut: 109,
      donutColor: 'hsl(257, 70%, 50%)',
      donut: 109,
      donutColor: 'hsl(257, 70%, 50%)',
      donut: 109,
      donutColor: 'hsl(257, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 187,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 19,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 170,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 56,
      kebabColor: 'hsl(340, 70%, 50%)',
      pizza: 191,
      pizzaColor: 'hsl(72, 13.20%, 70.20%)',
      icecream: 72,
      icecreamColor: 'hsl(257, 24.20%, 51.40%)',
    },
    {
      country: 'AF',
      'hot dog': 66,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 96,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 178,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 33,
      kebabColor: 'hsl(340, 70%, 50%)',
      fries: 189,
      friesColor: 'hsl(72, 70%, 50%)',
      donut: 199,
      donutColor: 'hsl(257, 70%, 50%)',
      pizza: 191,
      pizzaColor: 'hsl(72, 13.20%, 70.20%)',
      icecream: 72,
      icecreamColor: 'hsl(257, 24.20%, 51.40%)',
    },
    {
      country: 'AG',
      'hot dog': 52,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 197,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 10,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 31,
      kebabColor: 'hsl(340, 70%, 50%)',
      fries: 95,
      friesColor: 'hsl(72, 70%, 50%)',
      donut: 65,
      donutColor: 'hsl(257, 70%, 50%)',
      pizza: 191,
      pizzaColor: 'hsl(72, 13.20%, 70.20%)',
      icecream: 72,
      icecreamColor: 'hsl(257, 24.20%, 51.40%)',
    },
    {
      country: 'AI',
      'hot dog': 33,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 85,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 148,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 23,
      kebabColor: 'hsl(340, 70%, 50%)',
      fries: 112,
      friesColor: 'hsl(72, 70%, 50%)',
      donut: 30,
      donutColor: 'hsl(257, 70%, 50%)',
      pizza: 191,
      pizzaColor: 'hsl(72, 13.20%, 70.20%)',
      icecream: 72,
      icecreamColor: 'hsl(257, 24.20%, 51.40%)',
    },
    {
      country: 'AL',
      'hot dog': 195,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 165,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 85,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 31,
      kebabColor: 'hsl(340, 70%, 50%)',
      fries: 22,
      friesColor: 'hsl(72, 70%, 50%)',
      donut: 137,
      donutColor: 'hsl(257, 70%, 50%)',
      pizza: 191,
      pizzaColor: 'hsl(72, 13.20%, 70.20%)',
      icecream: 72,
      icecreamColor: 'hsl(257, 24.20%, 51.40%)',
    },
    {
      country: 'AM',
      'hot dog': 146,
      'hot dogColor': 'hsl(229, 70%, 50%)',
      burger: 48,
      burgerColor: 'hsl(296, 70%, 50%)',
      sandwich: 49,
      sandwichColor: 'hsl(97, 70%, 50%)',
      kebab: 68,
      kebabColor: 'hsl(340, 70%, 50%)',
      fries: 115,
      friesColor: 'hsl(72, 70%, 50%)',
      donut: 158,
      donutColor: 'hsl(257, 70%, 50%)',
      pizza: 191,
      pizzaColor: 'hsl(72, 13.20%, 70.20%)',
      icecream: 72,
      icecreamColor: 'hsl(257, 24.20%, 51.40%)',
    },
    {
        country: 'AG',
        'hot dog': 52,
        'hot dogColor': 'hsl(229, 70%, 50%)',
        burger: 197,
        burgerColor: 'hsl(296, 70%, 50%)',
        sandwich: 10,
        sandwichColor: 'hsl(97, 70%, 50%)',
        kebab: 31,
        kebabColor: 'hsl(340, 70%, 50%)',
        fries: 95,
        friesColor: 'hsl(72, 70%, 50%)',
        donut: 65,
        donutColor: 'hsl(257, 70%, 50%)',
        pizza: 191,
        pizzaColor: 'hsl(72, 13.20%, 70.20%)',
        icecream: 72,
        icecreamColor: 'hsl(257, 24.20%, 51.40%)',
      },
  ];

  return (
    <div style={{ height: '500px', background: '#fff' }}>
      <ResponsiveBar
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut','pizza','icecream']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 8,
            spacing: 10,
          },
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 3,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        groupMode="grouped"
      />
    </div>
  );
};

export default BarChart;