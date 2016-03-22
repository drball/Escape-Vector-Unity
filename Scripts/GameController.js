#pragma strict
import UnityEngine.UI;

public var levelReached :int = 0;

public var playerControllerScript : PlayerController; //script

function Start () {
	var levelReachedLoad : int = PlayerPrefs.GetInt("levelReached");
	Debug.Log("LevelReachedLoad = "+levelReachedLoad);
	
	if(levelReachedLoad > 0)
	{
		levelReached = levelReachedLoad;
	}
	Debug.Log("levelReached"+levelReached);
	
	playerControllerScript = GetComponent.<PlayerController>();
	
	StartLevel();
}

function StartLevel() {
	
}