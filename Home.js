console.log("hello");
const jstext = document.querySelector('.jstext');
const styles = {
    width: '150px',
    height: '40px',
    color: 'white',
    backgroundColor: 'black'
};
function bij() {
    if(confirm("you want it darker?")){
        document.getElementById('body').style = 'background-image: url(ANONYMOUS.jpg)';
    } else {
        document.getElementById("jstext").innerHTML = "ya aint a nigga, white piece o' sh*t";
        document.getElementById('jstext').style = "text-align: center; color: rgb(223, 12, 12)";
    };
    document.getElementById('maintext').style = 'color: white';
    console.log("fnktn");
}

bij();
