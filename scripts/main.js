import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { NoteForm } from "./notes/NoteForm.js";
import "./notes/NoteList.js";
import "./alibis/KnownAssociates.js";
import "./alibis/DisplayAlibi.js"

CriminalList();
ConvictionSelect();
OfficerSelect();
ShowNoteButton();
NoteForm();


/**
 * TODO:
 * 
 * add button on criminal cards labeled "Associate Alibis"
 * 
 * each button should have a unique id matching the criminal id value
 * <button id="associates--${criminal.id}">Associate Alibis</button>
 * 
 * add function to fetch known associate data and store in an array
 *      criminalObj.known_associates = {name: taco, alibi: foo}
 * 
 * When button is clicked (eventListen):
 * 1. iterate array known_associates
 * 2. display:
 *      name of known associate
 *      the alibi
 * 
 * create new note about any interesting alibis
 */