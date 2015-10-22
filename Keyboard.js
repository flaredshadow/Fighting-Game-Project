window.addEventListener('keydown', KeyPressDown, false);

window.addEventListener('keyup', KeyPressUp, false);

var kboard = new Keyboard();

function KeyPressDown(event)
{
	event.preventDefault();
	
	kboard.UpdatePress(event.keyCode);
}

function KeyPressUp(event)
{
	event.preventDefault();
	
	kboard.UpdateRelease(event.keyCode);
	
}
	
function Keyboard()
{
	var buffertime = 10;
	
	var keystate = {};
	keystate['jumpP1'] = false, keystate['crouchP1'] = false, keystate['leftkeyP1'] = false, keystate['rightP1'] = false, keystate['lightpunchP1'] = false,
	keystate['heavypunchP1'] = false, keystate['lightkickP1'] = false, keystate['heavykickP1'] = false, keystate['dashP1'] = false, keystate['blockP1'] = false,
	keystate['grabP1'] = false;
	
	keystate['jumpP2'] = false, keystate['crouchP2'] = false, keystate['leftkeyP2'] = false, keystate['rightP2'] = false, keystate['lightpunchP2'] = false,
	keystate['heavypunchP2'] = false, keystate['lightkickP2'] = false, keystate['heavykickP2'] = false, keystate['dashP2'] = false, keystate['blockP2'] = false,
	keystate['grabP2'] = false;
	
	var keybuffer = {};
	keybuffer['jumpP1'] = 0, keybuffer['crouchP1'] = 0, keybuffer['leftkeyP1'] = 0, keybuffer['rightP1'] = 0, keybuffer['lightpunchP1'] = 0,
	keybuffer['heavypunchP1'] = 0, keybuffer['lightkickP1'] = 0, keybuffer['heavykickP1'] = 0, keybuffer['dashP1'] = 0, keybuffer['blockP1'] = 0,
	keybuffer['grabP1'] = 0;
	
	keybuffer['jumpP2'] = 0, keybuffer['crouchP2'] = 0, keybuffer['leftkeyP2'] = 0, keybuffer['rightP2'] = 0, keybuffer['lightpunchP2'] = 0,
	keybuffer['heavypunchP2'] = 0, keybuffer['lightkickP2'] = 0, keybuffer['heavykickP2'] = 0, keybuffer['dashP2'] = 0, keybuffer['blockP2'] = 0,
	keybuffer['grabP2'] = 0;
		
	var keyvalue = {};
	keyvalue['jumpP1'] = 38, keyvalue['crouchP1'] = 40, keyvalue['leftkeyP1'] = 37, keyvalue['rightP1'] = 39, keyvalue['lightpunchP1'] = 80,
	keyvalue['heavypunchP1'] = 219, keyvalue['lightkickP1'] = 73, keyvalue['heavykickP1'] = 221, keyvalue['dashP1'] = 79, keyvalue['blockP1'] = 76,
	keyvalue['grabP1'] = 77;
	
	keyvalue['jumpP2'] = 87, keyvalue['crouchP2'] = 83, keyvalue['leftkeyP2'] = 65, keyvalue['rightP2'] = 68,keyvalue['lightpunchP2'] = 82,
	keyvalue['heavypunchP2'] = 83, keyvalue['lightkickP2'] = 84, keyvalue['heavykickP2'] = 89, keyvalue['dashP2'] = 90, keyvalue['blockP2'] = 71,
	keyvalue['grabP2'] = 72;
		
	this.UpdatePress = function(givencode) // manges the state of the keys on press
	{	
		for (var i in keystate)
		{
			if(keyvalue[i] == givencode)
			{
				if(keystate[i] == false) // set buffer time only on initial press
				{
					keybuffer[i] = buffertime;
				}
				
				keystate[i] = true;
			}
		}
	}
	
	this.UpdateRelease = function(givencode) // manges the state of the keys on release
	{
		for (var i in keystate)
		{
			if(keyvalue[i] == givencode)
			{
				keystate[i] = false;
			}
		}
	}
	
	this.UpdateBuffer = function()
	{
		for (var i in keystate)
		{
			if(keybuffer[i] > 0)
			{
				keybuffer[i] -= 1;
			}
		}
	}
	
	this.GetKeyState = function(givenkey) // returns the state of the key, changes press states into down states, which represent the button being held
	{
		return keystate[givenkey];
	}
	
	this.GetKeyPress = function(givenkey)
	{
		return keybuffer[givenkey]>0;
	}
}