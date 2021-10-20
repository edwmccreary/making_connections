console.log("page loaded...");

your_data = {
    first_name : "Jane",
    last_name : "Doe",
    connection_requests : 2,
    connections : 418
}

function edit_profile(){
    document.getElementById("card-yourname").innerText = "Snoop Dogg";
    document.getElementById("card-yourpic").src = "images/snoop_dogg.gif";
    document.getElementById("your-description").innerHTML = "Rapper | Entrepreneur | Media Personality <br> It ain't no fun if the homies can't have none."
}

function accept_connection_request(element){
    your_data.connections++;
    your_data.connection_requests--;
    document.getElementById("num-connection-requests").innerText = your_data.connection_requests;
    document.getElementById("num-connections").innerText = your_data.connections;
    remove_connection_request(element);
}

function deny_connection_request(element){
    your_data.connection_requests--;
    document.getElementById("num-connection-requests").innerText = your_data.connection_requests;
    remove_connection_request(element);
}

function remove_connection_request(element){
    var parent = element.parentNode.parentNode;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }   
}