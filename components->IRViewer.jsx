import "./IRViewer.css";


function IRViewer({

    irCode="",

    programOutput="",

    optimizations=[],

    metrics={
        before_lines:0,
        after_lines:0,
        reduction:"0%"
    }

}){


return (

<div className="ir-viewer">


<h2>
LLVM IR Viewer ⚙️
</h2>


<pre>

{
irCode ||
"Compile your C++ code to generate LLVM IR..."
}

</pre>





<h2>
Program Output ▶
</h2>


<pre className="output-box">

{
programOutput ||
"No program output"
}

</pre>







<h2>
Optimization Analysis 🤖
</h2>



<ul className="optimization-list">


{

optimizations.length > 0 ?

optimizations.map(

(item,index)=>(

<li key={index}>

✓ {item}

</li>

)

)

:

<li>
No optimization data available.
</li>


}


</ul>







<h2>
Optimization Metrics 📊
</h2>




<div className="metrics">


<div className="metric-card">

<h3>
Before Lines
</h3>

<p>
{metrics.before_lines}
</p>

</div>




<div className="metric-card">

<h3>
After Lines
</h3>

<p>
{metrics.after_lines}
</p>

</div>





<div className="metric-card">

<h3>
Reduction
</h3>

<p>
{metrics.reduction}
</p>

</div>



</div>



</div>

);


}


export default IRViewer;
