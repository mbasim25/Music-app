module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
       '8': 'repeat(8, minmax(0, 1fr))',},
    
      gridTemplateColumns: {
        // Simple 16 column grid
      '21': 'repeat(21, minmax(0, 1fr))',},
      spacing: {
        '64': '16rem',
        '128': '32rem', 
        '140': '35rem', 
        '208': '52rem', 
        '236': '59rem', 
        '308': '77rem', 
        '368': '92rem', 
      },
    },
  },
  variants: {
    extend: { 
      
    }
  },
  plugins: [],
}
