#pragma strict

public var ExplosionParticles : GameObject; 
public var SparkParticles : GameObject; 

public var playerMovementScript : PlayerMovement; //script
public var isAlive = true;

private var rb: Rigidbody;
private var playerStartPos : Vector3;
private var playerStartRotation : Quaternion;
private var vfx : MeshRenderer;
private var initialDrag : float;
private var PortalObject : GameObject;
private var PortalScript : PortalScript;

function Start () {
	playerMovementScript = GetComponent.<PlayerMovement>();
	
	playerStartPos = transform.position;
	
	vfx = GetComponent.<MeshRenderer>();
	
	rb = GetComponent.<Rigidbody>();

	initialDrag = rb.drag;
	
	ExplosionParticles.SetActive(false);
	SparkParticles.SetActive(false);

	playerStartRotation = transform.rotation;

	PortalObject = GameObject.Find("SpacePortal"); 
	PortalScript = PortalObject.GetComponent.<PortalScript>();
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

			yield WaitForSeconds(1);

			PlayerReset ();
			
		}
		
	} else if (collision.collider.tag == "Exit"){
	    Debug.Log("player collides");
	}
	
}

function PlayerReset () {
	vfx.enabled = true;
	rb.velocity = Vector3.zero;
	rb.angularVelocity = Vector3.zero;
	
	transform.position = playerStartPos;
	transform.rotation = playerStartRotation;

	rb.drag = initialDrag;

	isAlive = true;
}

function OnTriggerEnter(other: Collider) 
{
    //--when player touches portal
    if (other.tag == "Exit" && isAlive)
    {
        Debug.Log("player touches portal");
        		
        OnExit();
        //-- some particle effect

        PortalScript.EnterPortal();

    }

}

function OnExit() {
	//--called when touches exit (on portal script)

	Debug.Log("hellooooo");

	if(isAlive) {
		isAlive = false;
        vfx.enabled = false;
	}else{
		Debug.Log("exit called but player is not alive");
	}
}
