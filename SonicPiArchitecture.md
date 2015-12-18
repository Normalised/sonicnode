# Sonic Pi Architecture

Some random notes about how the original Sonic Pi app is put together.

The system is 3 separate pieces :

1. Editor (QT / Scintilla)

2. Ruby service layer

3. Super Collider (scsynth only, not sclang)

Communication between the layers is all via OSC :

Editor <-> Ruby Services <-> SuperCollider

Ports :

Editor -> Ruby : 4557
Ruby -> Editor : 4558

Editor -> SC : 4556

SC -> Editor : ?


## Executable startup

Same order as above, the Editor executable starts the ruby layer which in turn starts SuperCollider.
