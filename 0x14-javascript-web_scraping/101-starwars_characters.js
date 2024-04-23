import requests

def get_movie_characters(movie_id):
    # URL of the Star Wars API films endpoint
    url = f"https://swapi.dev/api/films/{movie_id}/"
    
    # Sending a GET request to the API
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Extracting character URLs from the response
        character_urls = response.json()['characters']
        
        # Fetching character names from their respective URLs
        for character_url in character_urls:
            character_response = requests.get(character_url)
            if character_response.status_code == 200:
                character_name = character_response.json()['name']
                print(character_name)
            else:
                print(f"Failed to retrieve character data from URL: {character_url}")
    else:
        print(f"Failed to retrieve movie data for Movie ID: {movie_id}")

# Example usage: Movie ID for "Return of the Jedi" is 3
get_movie_characters(3)
