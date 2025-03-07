<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">let count = 0;</span></p>
<p class="p1"><span class="s1">const callButton = document.getElementById('callButton');</span></p>
<p class="p1"><span class="s1">const decreaseButton = document.getElementById('decreaseButton');</span></p>
<p class="p1"><span class="s1">const resetButton = document.getElementById('resetButton');</span></p>
<p class="p1"><span class="s1">const setButton = document.getElementById('setButton');</span></p>
<p class="p1"><span class="s1">const manualInput = document.getElementById('manualInput');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">callButton.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>count++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>callButton.textContent = count;</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">decreaseButton.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (count &gt; 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>count--;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>callButton.textContent = count;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">resetButton.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>count = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>callButton.textContent = count;</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">setButton.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const inputValue = parseInt(manualInput.value, 10);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (!isNaN(inputValue) &amp;&amp; inputValue &gt;= 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>count = inputValue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>callButton.textContent = count;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
