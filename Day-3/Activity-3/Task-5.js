var score=95;
  
switch(true) {
    case (score <= 100 && score >= 90):
        gscore = 'A';
        console.log(gscore);
        break;
    case (score <= 89 && score >= 80):
        gscore = 'B';
        console.log(gscore);
        break;
    case (score <= 79 && score >= 70):
        gscore = 'C';
        console.log(gscore);
        break;
        case (score <= 69 && score >= 60):
        gscore = 'D';
        console.log(gscore);
        break;
    case (score <= 59 && score >= 0):
        gscore = 'F';
        console.log(gscore);
        break;
    default:
        console.log("Invalid score");
        break;
}