import random
# Pseudocode
# Define main function
# Print Menu Options and ask for user input
# Process inputs and redirect to if functions
# If a specific selection is chosen and if it is random selection, use rand to generate numbers fro 0 to
# Select a random word from the list and find its length
# Ask the user for a word and make sure it "isalpha"
# Compare letters from input to selected random wrod
# If the user inputs an exact match, print a winning message, end the game, print menu options, and prompt input
# If the tries limit is exceeded, print a losing message, end the game, print menu options, and prompt input

def instructions():
    print(" Welcome to Richard's word game   ")
    print("     Input one of 3 topics        ")
    print(" Guess word in less than 3 tries  ")
    print("            Good Luck!            ")

def play_game():
    word_banks = {
    "Food": ["apple", "banana", "lemon", "asparagus", "beef", "lamb", "rice", "beans", "lettuce", "pork", "bacon", ""],
    "Sports": ["basketball", "football", "baseball", "boxing", ""],
    "category3": ["word7", "word8", "word9"]
    }

    word_bank = word_banks[category]
    random_word = random.choice(word_bank)


def random():

def scoreboard():


def menu():
    print("         Word Guesser        ")
    print("     1. Instructions     ")
    print("     2. Food     " )
    print("     3. Sports     " )
    print("     4. Anime     " )
    print("     5. Random Selection     " )
    print("     6. Scoreboard      " )
    print("     7. Exit     " )
    j =int(0)
    while j > 7 or j <1:
        print("Error: Input a Number between 1-6")
        try:
            j = int(input(":")
        except ValueError:
            print("Error: Input a Number between 1-6")


def main():
    while True:
        menu()
        choice = input("Enter your choice: ")

        if choice == '1':
            instructions()
        elif choice == '2':
            play_game(category='')
        elif choice == '3':
            play_game(category='')
        elif choice == '4':
            play_game(category='')
        elif choice == '5':
            random()
        elif choice == '6':
            scoreboard
        elif choice == '7':
            exit
        else:
            print("Dum Dum")


main()

