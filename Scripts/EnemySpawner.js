#pragma strict

public var SpawnObject : GameObject;
public var PathObj : GameObject;
public var spawnInterval : float = 1.5;
public var delay : float = 0;
public var speed : float = 4;

private var nextSpawn : float = 0;

 
function Start () {
	if(delay > 0) {
		nextSpawn = delay;
	}
	
	//--hide the path obj
	PathObj.active = false;
	
}


function Update() {

     if(Time.time > nextSpawn)
     {
     	// Debug.Log(nextSpawn);
        nextSpawn = Time.time + spawnInterval;
                
        var enemyInstance : GameObject = spawnEnemy();
//        Debug.Log("enemy"+Time.time);

		enemyInstance.GetComponent.<EnemyMovement>().speed = speed;
        
     } 
	//Debug.Log(Time.time);

}

function spawnEnemy() {
	var enemyInstance : GameObject = Instantiate(Resources.Load("SpaceshipLarge", GameObject),
				transform.position, 
				transform.rotation);
				
	return enemyInstance;
}