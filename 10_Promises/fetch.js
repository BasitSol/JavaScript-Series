// We will be learning about he Fetch() method
// What is fetch?  It was present in browser and when it run in node.js it becomes very useful and flawless.It is a network base request
// What fetch can do ? you can also pass other arguments like method, headers, body etc in fetch .
// Interview question:
// If you get an error code(404) as a result of requesting through the promise then will it be available in reject or in resolve?
// It will be in a form of response it's not an error though it will be error if it couldn't be able to request the server/browser.
// Fetch internal mechanism actually divided in 2 parts.
// 1st part (web browser) or you can say native node. for handling api request .
// 2nd part reserve space in your variable and memories .

// response = fetch('something')
// Initially 2nd part run :
// 1) on fullFilled array  => it is actually the promise resolve 
// 2) on Rejection => it is actually the promise reject

// Then web browser part / node.js part execute
// It either access the web based request or it will be a node based request .
// then from there network request run . This request can't sent on it's own it needs the web browser or node.js source to do that.
// If it get any response then it will go towards the resolve always . If the request is not able to send then it will go towards the reject .
// Now you can guess what error 404 will go to resolve coz we get to know about that network request gave us a response . if we didn't get response then it will
// go towards rejection.
// and then after both resolve and reject done from work(as they both include functions) these results/data fulfilled and included in Data and then finally this stored
// in result variable and this variable is now available in global memory.
// Without the variable this data is not accessible directly
