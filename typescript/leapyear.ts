var year =2024;

if(year % 400 == 0 )
{
    console.log(year + " is leap year");
}
else if (year % 100 == 0 )
{
    console.log(year + " is not leap year");
}
else if (year % 4 == 0 )
{
    console.log(year + " is leap year");
}
else
{
    console.log(year + " is not leap year");
}
