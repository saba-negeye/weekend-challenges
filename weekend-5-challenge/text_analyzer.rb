#1
# Read text from a file
def read_text_from_file(filename)
    File.read(filename)
end

#2
# Method to count the words
def word_count(text)
    #/\W+/ recogrnizes non-word characters
    #split at spaces in an array, filter out empty strings 
    # removes if empty is true
    #.size counts the rest of array
    text.split(/\W+/).reject(&:empty?).size

end 

#3
# Method to count characters
def character_count(text)
    #pass in text and use .length to count every individual char
    #counts spaces too
    text.length
  end

#4
# Method to count paragraphs
def paragraph_count(text)
    #/\n+/ insures it splits the text when there is a blank line into an array items
    #ignores the blamk line if the string is empty 
    #.size counts the items(paragraphs) in array
    text.split(/\n+/).reject(&:empty?).size
end
#5
# method for most common word 
def most_common_word(text)
    #(/\W+/) finds spaces and punctuation 
    #split words of string by removing punctuation
    words = text.downcase.tr(",.?!", "").split
    
    #Counts how often each word occurs
    #max_by shows the highest count
    words.each_with_object(Hash.new(0)) do |word, counts|
      counts[word] += 1
    end.max_by { |_, count| count }
  end
  
#6
#methods for top 10 most common words and their frequencies
def top_ten_word(text, top_ten = 10)
    #  text and split into words after punctuation
    words = text.downcase.trtr(",.?!", "").split
    
    # Counts how often each word occurs
    counts = words.each_with_object(Hash.new(0)) do |word, hash|
      hash[word] += 1
    end
    
    # Sort by count in order and get top_ten words
    counts.sort_by { |word, count| -count }.first(top_ten).to_h
  end

# Analyze the sample text
filename = 'sample.txt'
text = read_text_from_file(filename)
# use `text` ^ to pass as a parameters to your methods
word_counts = word_count(text)
character_counts = character_count(text)
paragraph_counts = paragraph_count(text)
most_common_word_counts = most_common_word(text)
top_ten_words = top_ten_word(text)


# puts statements to console go here:
puts "number of words: #{word_counts}"
puts "number of characters: #{character_counts}"
puts "number of paragraphs: #{paragraph_counts}"
puts "most common word & frequency: #{most_common_word_counts}"
puts "10 most common words & frequency: #{top_ten_words}"
puts "Top 10 most common words & frequencies:"
top_ten_words.each do |word, count|
  puts "'#{word}': appears #{count} times"
end