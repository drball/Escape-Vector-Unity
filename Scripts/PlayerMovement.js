#pragma strict

public var speed : float = 1.000;
public var isMoving : boolean = false;
public var hasMoved = false; //--use this to determine when to hide instruction
public var ParticleThrustL : GameObject;
public var ParticleThrustR : GameObject;
//public var vfxObj : GameObject;

private var ParticleThrustActive = false;
private var ParticleThrustEmissionRate;
private var rb: Rigidbody;

public var playerControllerScript : PlayerController; //script


function Start () {
	isMoving = true;
	ParticleThrustActive = true;
	ParticleThrustEmissionRate = ParticleThrustL.GetComponent.<ParticleSystem>().emissionRate;
	
	rb = GetComponent.<Rigidbody>();
	
	playerControllerScript = GetComponent.<PlayerController>();
	

}

function FixedUpdate () 
{

	if (Input.GetKey("space")) {
		isMoving = false;
	} else {
		isMoving = true;
	}
		
	if ((isMoving == true) && (playerControllerScript.isAlive == true)){

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

