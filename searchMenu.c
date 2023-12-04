#include <cs50.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h>
#define SIZE1 5000
#define SIZE2 10000
#define SIZE3 50000
int *readFile(string fileName, int size, int size2);  //pointer to return and int array
int linearSearch(int array[], int guess, int size);  //linear search
int binarySearch(int array[], int x, int min, int max);
int *bubbleSort(int array[], int max);
int *selectionSort(int array[]);
void printarray(int sortArray[]);
void menu();
void writeArray(int array[], int size);

int main(void)
{
    // Get File Name
    // Create variable that identifies the SIZE of File name
    // After identifying size, display menu
    // Use switch statements and cases to run certain commands
    string fileName=get_string("Enter File name ");
    FILE* file=(fopen(fileName, "r"));
    if(!file)
    {
    printf("\n Unable to open : %s ", fileName);
    return -1;
    }
    fclose(file);

    /* int SIZE;
    if (fileName = *FILE)
    {
        SIZE == SIZE1 5000;
    }
    else if (fileName = *FILE)
    {
        SIZE == SIZE2 10000;
    }
    else if (fileName = *FILE)
    {
        SIZE == SIZE3 50000;
    }
    */

   //void activeMenu = void menu();
   //int option = get_int(" ");
   //if(option < 0 || option > 5)
   //  {
   //       return 0;
   //  }
   // int temp = option;
   // switch(temp)
   // {
   //       case '1':
   //       int* array;
   //       array = readFile(fileName, SIZE, )
   //       break;
   //       case '2':
   //       int *sortedArray = bubbleSort(array, SIZE)
   //       printarray(sortedArray);
   //       break;
   //       case '3':
   //       int *searchArray = linearSearch(int array[],int guess,int size)
   //       break;
   //       case '4':
   //
   //
   //
   //
   //
   //
   

    int *array;
    array=readFile(fileName, 10000, 5);
    //int guess=get_int("give me a number in between ");
    // int indx = linearSearch(array, guess, SIZE2);
    // printf("the index is %i \n", indx);
    int *sortedArray=bubbleSort(array, SIZE2);
     printarray(sortedArray);
    //
}
int *readFile(string fileName, int size, int size2 )
    {

    FILE* file=(fopen(fileName, "r"));

    char line[size2]; //how many characers per line
    char options[size][size2];//array to put all the numbers from the file

    int  static numbers[SIZE2];  // file to be returned

    for (int i=0; i <size; i++)
    {
        fscanf(file, "%s", options[i]);
        // printf("%s \n", options[i]);
        numbers[i]= atoi(options[i]);
    }
    fclose(file);
   return numbers;
}
int linearSearch(int array[],int guess,int size )
{
    for(int i=0; i < size; i++)
    {
        if (array[i]== guess)
        {
            return i;
        }
    }
    return -1;
}

int *selectionSort(int array[])
{
    //printarray(array);
    int min=SIZE2;
    int idx = 0;
    for (int i=0; i< SIZE2; i++)
    {
        min =SIZE2+1;
        for (int j =i; j <SIZE2; j++)
        {
            int num = array[j];
            if (num < min)
            {
                idx=j;
                min=array[j];
                //printf("%i \n", array[j]);
            }
        }
        int temp= array[i];
        array[i]=array[idx];
        array[idx]=temp;
        //printf("%i \n", array[i]);
    }
    return array;
}
void printarray(int sortArray[])
{
    for (int i=0; i < SIZE2; i++)
    {
        printf("%i \n", sortArray[i]);
    }
}

void menu()
{
    printf("=====================================\n");
    printf("#               MENU                #\n");
    printf("#   1) Read a file                  #\n");
    printf("#   2) Sort an Array                #\n");
    printf("#   3) Search for a value in array  #\n");
    printf("#   4) Write an array to File       #\n");
    printf("#   5) Exit                         #\n");
    printf("=====================================\n");
}

void writeArray(int sorted[], int size)
{
    string name = get_string("File Name: ");
    char filename[10];
    sprintf(filename, "%s.txt", name);
    FILE *file = fopen(filename, "w");
    for (int i = 0; i < size; i++)
    {
        fprintf(file, "%d\n", sorted[i]);
    }
}

int *bubbleSort(int array[], int max)//max is the size of the array
{
    //declare swap value as non zero and create swap counter
    //make do while function
    //return the swap value to 0 in the function
    //swap adjacent pair if the value on the right is lower than the value on the left
    //count number of swaps
    //reset function and repeat until number of swaps = 0

    int swap = -1;
    do
    {
        swap = 0;
        for (int i=0; i<max-1; i++ )
        {
           if(array[i] > array[i+1])
           {
            int temp = array[i];
            array[i]=array[i+1];
            array[i+1] = temp;
            swap++;
            }
        }
    }
    while (swap != 0);
    return array;
}

int binarySearch(int array[], int x, int min, int max)
{
    if (min > max)
        {
            return 0;
        }
    else
        {
            int mid = (min + max) / 2;
            if (x == array[mid])
            {
                return mid;
            }
            else if (x > array[mid])
            {
                return binarySearch(array, x, mid + 1, max);
            }
            else
            {
                return binarySearch(array, x, min, mid - 1);
            }
        }
}
