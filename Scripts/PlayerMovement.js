#pragma strict

public var speed : float = 1.00;
public var isMoving : boolean = false;
public var isAlive = true;
public var hasMoved = false; //--use this to determine when to hide instruction
//public var vfxObj : GameObject;


function Start () {
	isMoving = true;
}

function FixedUpdate () 
{
		
	if ((isMoving == true) && (isAlive == true)){

//		GetComponent.<Rigidbody>().AddRelativeForce (Vector3.forward * speed);
		transform.Translate(Vector3.forward * speed * Time.deltaTime);
//		Debug.Log(transform.position);

	}

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