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
    print("==================================")
    print("          Instructions:           ")
    print(" Welcome to Richard's word game   ")
    print("     Input one of 3 topics        ")
    print(" Guess word in less than 3 tries  ")
    print(" Input lowercase characters only  ")
    print("            Have Fun!             ")
    print("==================================")

def play_game(category):
    word_banks = {
    "Food": ["apple", "banana", "lemon", "asparagus", "beef", "lamb", "rice", "beans", "lettuce", "pork", "bacon", "salmon", "tuna", "caviar", "sandwich", "ham", "shrimp", "lobster", "chicken"],
    "Sports": ["basketball", "football", "baseball", "boxing", "running", "wrestling", "cycling", "throwing", "hockey", "golf", "badminton", "volleyball", "fencing", "skiing", "motor"],
    "Countries": ["usa", "china", "japan", "germany", "canada", "uk", "mexico", "russia", "vietnam", "cuba", "thailand", "ireland", "france", "spain", "india", "sweden", "finland", "nigeria", "algeria"]
    }

    word_bank = word_banks[category]
    random_word = random.choice(word_bank)

    tries = 3
    while tries > 0:
        user_guess = input("Guess: ")
        if random_word == user_guess:
            print("You Win!")
            break
        else:
            if user_guess not in random_word:
                tries -= 1
        print("Correctly guessed letters:")
        for char in user_guess:
            if char in random_word:
                print(char)
        if tries == 0:
            print("You Lose!")

def random_game():
    categories = ['Food', 'Sports', 'Countries']
    random_category = random.choice(categories)
    play_game(category=random_category)



def menu():
    print("=============================")
    print("         Word Guesser        ")
    print("     1. Instructions     ")
    print("     2. Food     " )
    print("     3. Sports     " )
    print("     4. Countries     " )
    print("     5. Random Selection     " )
    print("     6. Exit     " )
    print("=============================")


def main():
    instructions()
    while True:
        menu()
        choice = input("Enter your choice: ")

        if choice == '1':
            instructions()
        elif choice == '2':
            play_game(category='Food')
        elif choice == '3':
            play_game(category='Sports')
        elif choice == '4':
            play_game(category='Countries')
        elif choice == '5':
            random()
        elif choice == '6':
            break
        else:
            print("Dum Dum")



main()



main()

