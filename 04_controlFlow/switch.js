// Here we will be talkimg about the switch statement 

//Switch syntax
// switch (key){
// case value :
/// break ;

// default :
// break ;
//}
const month = 3
switch (month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar"); // By dafault the Key when macthed then all of the below code will execute except default
                            // for that thing you need to use the break after every case
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("Default Case Matched");
        break ;       
}
