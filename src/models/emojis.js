class Emoji {
  constructor(symbol, name, shortcode) {
    this.symbol = symbol;
    this.name = name;
    this.shortcode = shortcode;
  }
}

const emojis = [
  new Emoji("😀", "Grinning Face", "grinning"),
  new Emoji("😂", "Face With Tears of Joy", "joy"),
  new Emoji("😡", "Angry Face", "angry"),
  new Emoji("🎃", "Jack-O-Lantern", "pumpkin"),
  new Emoji("🔥", "Fire", "fire"),
  new Emoji("💻", "Laptop Computer", "laptop"),
  new Emoji("🐶", "Dog", "dog"),
  new Emoji("🏡", "House and Tree", "house"),
  new Emoji("🎉", "Party Popper", "tada"),
  new Emoji("⛄️", "Snow Man", "frosty"),
  new Emoji("🍕", "Pizza Slice", "pizza"),
  new Emoji("🏓", "Ping Pong", "ping pong"),
  new Emoji("😭", "Loudly Crying Face", "cry")
]

export default emojis
