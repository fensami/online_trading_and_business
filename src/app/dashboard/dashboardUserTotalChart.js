



const DashboardUserTotalChart = () => {
  return (
    <>
    <div>
    <progress className="progress progress-secondary w-56" value={0} max="100"></progress></div>
<div>
<progress className="progress progress-error w-56" value="10" max="100"></progress>
</div>
<div>
<progress className="progress progress-warning  w-56" value="40" max="100"></progress>
</div>
<div>
<progress className="progress progress-info w-56" value="70" max="100"></progress>
</div>
<div>
<progress className="progress progress-success w-56" value="100" max="100"></progress>
</div>

    </>
  );
};

export default DashboardUserTotalChart;