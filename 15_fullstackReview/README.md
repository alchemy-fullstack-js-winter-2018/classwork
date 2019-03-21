# Full-stack review

## Agenda

* 1 hour finish twitter clone
* Full-stack review
* 3-4 hours full-stack practice

## Basic Setup

* scaffold back-end
* scaffold front-end
* create Note model
  * title and body
* create notes
  * create notes post route
  * create notes redux
  * create `NotesForm` component
  * create `CreateNote` container
* display notes
  * create notes get (all) route
  * update notes redux
  * create `Notes` component
  * create `AllNotes` container
* display note
  * create note get (by id) route
  * update notes redux
  * create `NoteDetail` container
  * add `Link` to `NoteDetail`
* update note
  * create note patch route
  * update notes redux
  * create `UpdateNote` container
  * add `Link` from `NoteDetail` to edit
* delete note
  * create note delete route
  * update notes redux
  * add button to `NoteDetail` to delete note

## Add Auth

* update Note model to include author
* add login requirement
  * create application in auth0
  * back-end
    * create ensureAuth middleware
  * front-end
    * create auth service on front-end
    * create session redux
    * create withSession HOC
    * create `Callback` container
    * create `User` component
    * create `CurrentUser` container
* add user to user details
  * back-end
    * populate user on get (by id) route
  * font-end
    * update `NoteDetail` to use `User` component
* add filter to display only users notes
  * font-end
    * create `getUserNotes` selector
    * create `UserNotes` container
* add filter to back-end
  * create `/notes/me` route
  * create `UserNotesBEFilter` container
