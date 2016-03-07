#pragma strict

public var SpawnObject : GameObject;
public var spawnInterval : float = 1.5;
public var delay : float = 0;
public var speed : float = 4;

private var nextSpawn : float = 0;
 
function Start () {
	if(delay > 0) {
		nextSpawn = delay;
	}
}


function Update() {

     if(Time.time > nextSpawn)
     {
     	Debug.Log(nextSpawn);
        nextSpawn = Time.time + spawnInterval;
        
        //--spawn new enemy
        //Instantiate(shot, transform.position, transform.rotation);
        
        var enemyInstance : GameObject = Instantiate(Resources.Load("SpaceshipLarge", GameObject),
				transform.position, 
				transform.rotation);
//        Debug.Log("enemy"+Time.time);

//		enemyInstance.speed = 30;
        
     } 
	//Debug.Log(Time.time);

 }