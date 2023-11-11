const backBtn=document.getElementById('back_button')
const forwardBtn=document.getElementById('forward_button')
const search=document.querySelector('.search')
const webView=document.querySelector('.web_view')
const homeBtn=document.getElementById('home_button')
    // Get the current date and time
    function display(){
    let displayTime=document.getElementById('display-time')

    const currentDate = new Date();
  
    // Create a date and time formatter
    const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // Use 12-hour clock format
    });
  
    // Format the current date and time
    const formattedTime = dateTimeFormatter.format(currentDate);
  displayTime.textContent=formattedTime
}
    // console.log('Current time:', formattedTime);
    function fetchQuotes(){
        const quotes=document.getElementById('display-quote')
    fetch('https://zenquotes.io/api/random')
    .then(res=>res.json())
    .then(data=>{quotes.innerHTML=data[0].h})
    .catch(err=>console.log(err))
    }
document.addEventListener('DOMContentLoaded', () => {
    display();
    fetchQuotes();
  });
  setInterval(()=>{
    display()
  },60000)
backBtn.addEventListener('click',()=>{
    if(webView.canGoBack()){
        webView.goBack()
    }
    // else{
    //     window.location.href='home.html'
    // }
})
forwardBtn.addEventListener('click',()=>{
    if(webView.canGoForward()){
        webView.goForward()
    }
})

homeBtn.addEventListener('click',()=>{
    window.location.href='home.html '
})
search.addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        if(!search.value.includes('.com') && !search.value.includes('.in') && !search.value.includes('.org') && !search.value.includes('.net') && !search.value.includes('.ai') && !search.value.includes('.uk')){
            search.value="https://www.google.com/search?q="+search.value
        }
        else if(!search.value.includes('https://') && !search.value.includes('http://')){
            search.value="https://"+search.value
            // window.location.href='index.html'
        }
        webView.src=search.value
       
    }
})



  