#pragma strict

public var speed : float = 1.000;
public var isMoving : boolean = false;
public var isAlive = true;
public var hasMoved = false; //--use this to determine when to hide instruction
public var ParticleThrustL : GameObject;
public var ParticleThrustR : GameObject;
//public var vfxObj : GameObject;

private var ParticleThrustActive = false;
private var ParticleThrustEmissionRate;
private var rb: Rigidbody;


function Start () {
	isMoving = true;
	ParticleThrustActive = true;
	ParticleThrustEmissionRate = ParticleThrustL.GetComponent.<ParticleSystem>().emissionRate;
	
	rb = GetComponent.<Rigidbody>();

}

function FixedUpdate () 
{

	if (Input.GetKey("space")) {
		isMoving = false;
	} else {
		isMoving = true;
	}
		
	if ((isMoving == true) && (isAlive == true)){

		GetComponent.<Rigidbody>().AddRelativeForce (-Vector3.forward * speed);
		
		ParticleThrustActive = true;

	} else {
		ParticleThrustActive = false;
	}

}

function Update() {
	if(ParticleThrustActive == true) {
		ParticleThrustL.GetComponent.<ParticleSystem>().emissionRate = ParticleThrustEmissionRate;
		ParticleThrustR.GetComponent.<ParticleSystem>().emissionRate = ParticleThrustEmissionRate;
	} else {
		ParticleThrustL.GetComponent.<ParticleSystem>().emissionRate = 0;
		ParticleThrustR.GetComponent.<ParticleSystem>().emissionRate = 0;
	}
	
	
//	transform.Translate(-Vector3.forward * speed * Time.deltaTime);
//	Debug.Log(transform.position);

}
function OnCollisionEnter(collision: Collision) {

	Debug.Log("collision "+ collision);
	//Debug.Log("enemy laser touched "+other);
	
	Debug.Log("hit something");
	
	if(collision.collider.tag == "Enemy"){
		Debug.Log("hit enemy");
		isMoving = false;
		isAlive = false;
		rb.drag = 0;
		rb.AddRelativeTorque (0,50,0);
	}
	
//	if(other.tag == "Enemy")
//	{
//		isMoving = false;
//		isAlive = false;
//		
//		Debug.Log("hit enemy");
//
//	} 
	
	
}



//function PauseMovement(localmoving : boolean) {
//	//--called when the button is pressed or stopped pressing 
//	moving = localmoving; //--assign to public var
//	
//	if((localmoving == false) && (alive == true)){
//		//--switch spin direction
//		rotationSpeed = -rotationSpeed;
//	}
//	
//	if(!hasMoved){
//		hasMoved = true;
//		
//		//--fade the instruction out for this player's control btn
//		Btn.GetComponent.<Animator>().Play("FadeOut");
//	}
//
//}

