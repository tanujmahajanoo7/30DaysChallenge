var year = 1944;

if (year % 400 == 0) 
{
    console.log("leap year");
}    
else if (year % 100 == 0) 
{
    console.log("Year is not leap year");
}    
else if (year % 4 == 0) 
{
    console.log("leap year");
} 
else 
{
    console.log("Year is not leap year");
}
