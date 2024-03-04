import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const DonutChart2 = () => {

    const chartRef = useRef(null);

    useEffect(() => {

        if (chartRef.current) {

            if (chartRef.current.chart) {

                chartRef.current.chart.destroy();

            }

            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type: "doughnut",
                data: {
                    labels: ["Presale", "Liquidity", "Marketing", "Rewards", "Staking", "Team", "Advisors & Ambassador Program"],
                    datasets: [
                        {
                            label: "Percentage",
                            data: [40, 15, 10, 5, 15, 10, 5],
                            backgroundColor: [
                                "rgb(85, 93, 80)",
                                "rgb(65, 74, 76)",
                                "rgb(178, 190, 181)",
                                "rgb(42, 52, 57)",
                                "rgb(53, 56, 57)",
                                "rgb(59, 60, 54)",
                                "rgb(112, 128, 144)"
                            ],
                            borderColor: [
                                "rgb(85, 93, 80)",
                                "rgb(65, 74, 76)",
                                "rgb(178, 190, 181)",
                                "rgb(42, 52, 57)",
                                "rgb(53, 56, 57)",
                                "rgb(59, 60, 54)",
                                "rgb(112, 128, 144)"
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
            });

            chartRef.current.chart = newChart;
        }

    }, []);

    return (
        <>
            <div className="w-[50vw] flex justify-center">
                <canvas ref={chartRef} />
            </div>
        </>
    );
};

export default DonutChart2;