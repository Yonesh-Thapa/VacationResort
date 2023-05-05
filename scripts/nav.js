document.body.innerHTML = `
<nav>
<ul>
    <li><a class="${current == "home" ? "active" : ""}" href="index.html">Home</a></li>
    <li><a class="${current == "book" ? "active" : ""}" href="overnight.html">Book A Room</a></li>
    <li><a class="${current == "dining" ? "active" : ""}" href="dining.html">Dining</a></li>
    <li><a class="${current == "rent" ? "active" : ""}" href="rentACar.html">Rent A Car</a></li>
    <li style="float:right"><a class="${current == "activities" ? "active" : ""}" href="activities.html">Activities</a></li>
</ul>
</nav>` 
+ document.body.innerHTML;