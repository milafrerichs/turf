var g = require('../index')

describe('distance', function(){
  describe('#index', function(){
    it('should return the distance between two points', function(done){
      g.load('../test/testFiles/Point1.geojson', function(err, point1){
        if(err) throw err
        g.load('../test/testFiles/Point2.geojson', function(err, point2){
          if(err) throw err
          g.distance(point1, point2, 'miles', function(err, distance){
            if(err) throw err
            done()
          })
        })
      })
    })
  })
}) 