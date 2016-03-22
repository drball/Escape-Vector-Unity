#pragma strict

public var ExplosionParticles : GameObject; 
public var SparkParticles : GameObject; 

public var playerMovementScript : PlayerMovement; //script
public var isAlive = true;

private var rb: Rigidbody;
private var playerStartPos : Vector3;
private var vfx : MeshRenderer;


function Start () {
	playerMovementScript = GetComponent.<PlayerMovement>();
	
	playerStartPos = transform.position;
	
	vfx = GetComponent.<MeshRenderer>();
	
	rb = GetComponent.<Rigidbody>();
	
	ExplosionParticles.SetActive(false);
	SparkParticles.SetActive(false);
}

function Update () {

}

function OnCollisionEnter(collision: Collision) {

	Debug.Log("collision "+ collision);
	//Debug.Log("enemy laser touched "+other);
	
	Debug.Log("hit something");
	
	if(collision.collider.tag == "Enemy")
	{
		Debug.Log("hit enemy");
		
		if(isAlive == true) {
			playerMovementScript.isMoving = false;
			isAlive = false;
			rb.drag = 0.5;
			rb.AddRelativeTorque (0,50,0);
			
			//--make spark for a few seconds
			SparkParticles.SetActive(true);
			
			yield WaitForSeconds(2);
			
			ExplosionParticles.SetActive(true);
			
			yield WaitForSeconds(0.25);
			
			SparkParticles.SetActive(false);
			vfx.enabled = false;
			
			yield WaitForSeconds(1);
			
			ExplosionParticles.SetActive(false);
			
		}
		
	}
	
}

function PlayerReset () {
	vfx.enabled = false;
	rb.velocity = Vector3.zero;
	rb.angularVelocity = Vector3.zero;
	
	transform.position = playerStartPos;
	transform.rotation = Quaternion.identity;
}