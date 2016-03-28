#pragma strict

// private var PlayerObject : GameObject;
// private var PlayerScript : PlayerController;
public var PortalParticles : GameObject;

function Start () {
	// PlayerObject = GameObject.Find("Player"); 
	// PlayerScript = PlayerObject.GetComponent.<PlayerController>();

	PortalParticles.SetActive(false);
}

function EnterPortal() {
	PortalParticles.SetActive(true);

	// yield WaitForSeconds(2);

	// PortalParticles.SetActive(false);
}