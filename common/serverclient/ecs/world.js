(function(exports){
   exports.SP = exports.SP || {};
   exports.SP.World = (function(){
    function World() {
        console.log("World created.");
    }

    World.prototype.step = function(delta){
    }
    return World;
    })();
// Export in such a way that it can be shared between server and client.                       
}) (typeof exports === 'undefined'? this : module.exports);