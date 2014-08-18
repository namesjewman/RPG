<div id="mainWindow">
	<div id="characterSelect">
    <div id="imgBorder"><img id="charpic" src="backgrounds/symbol.jpg" /></div>
	<form action="working/create_character.php" name="createChar" method="post" onsubmit="return validate_form()">
    Name:<input autocomplete="off" type="text" maxlength="10" name="name" /><br />
    Class: <select name="class" onChange="change_Pic(this.value)">
    			<option value="Symbol" selected></option>
    			<!-- <option value="Archer">Archer</option> -->
            <!-- <option value="Cleric">Cleric</option> -->
            <option value="Knight">Knight</option>
            <option value="Mage">Mage</option>
            <!-- <option value="Necro">Necromancer</option> -->
            <!-- <option value="Paladin">Paladin</option> -->
            <!-- <option value="Rogue">Rogue</option> -->
    		</select><br />
    <input type="hidden" name="player" value="<?php echo $_SESSION['id'] ?>">
    <input type="submit" id="submit" value="Create">
    </form>
    </div>
</div>