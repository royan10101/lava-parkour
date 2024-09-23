const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Plugins.Camera3D,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Behaviors.custom,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Shape3D.Exps.X,
		C3.Plugins.Shape3D.Exps.Y,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Shape3D.Exps.Angle,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Shape3D.Acts.MoveAtAngle,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Behaviors.custom.Acts.PushOutSolidAngle,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Shape3D.Cnds.CompareZElevation,
		C3.Plugins.Shape3D.Exps.ZHeight,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Shape3D.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Shape3D.Cnds.OnCollision,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Plugins.Shape3D.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Sine: 0},
	{block: 0},
	{"3DCamera": 0},
	{Mouse: 0},
	{Keyboard: 0},
	{lava: 0},
	{tembok: 0},
	{penghalang: 0},
	{coin: 0},
	{Custom: 0},
	{player: 0},
	{coin_icon: 0},
	{heart_icon: 0},
	{coin_text: 0},
	{Sprite: 0},
	{Audio: 0},
	{hp_text: 0},
	{score_text: 0},
	{respawn_set1: 0},
	{respawn_point: 0},
	{respawn_set2: 0},
	{respawn_set3: 0},
	{respawn_set4: 0},
	{victory_set: 0},
	{i_win: 0},
	{finish_banner: 0},
	{game_icon: 0},
	{fire_effect: 0},
	{fire_vinnette: 0},
	{dead_icon: 0},
	{tombol_depan: 0},
	{tombol_belakang: 0},
	{tombol_kanan: 0},
	{tombol_kiri: 0},
	{Touch: 0},
	{tombol_lompat: 0},
	{startButton: 0},
	{respawnbutton: 0},
	{winbutton: 0},
	{textpointerlock: 0},
	{PlayerHeight: 0},
	{PlayerSpeed: 0},
	{MouseSpeed: 0},
	{dz: 0},
	{gravity: 0},
	{onground: 0},
	{jump_strenght: 0},
	{hp: 0},
	{score: 0}
];

self.InstanceType = {
	block: class extends self.I3DShapeInstance {},
	_3DCamera: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	lava: class extends self.I3DShapeInstance {},
	tembok: class extends self.I3DShapeInstance {},
	penghalang: class extends self.I3DShapeInstance {},
	coin: class extends self.I3DShapeInstance {},
	player: class extends self.I3DShapeInstance {},
	coin_icon: class extends self.ISpriteInstance {},
	heart_icon: class extends self.ISpriteInstance {},
	coin_text: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	hp_text: class extends self.ITextInstance {},
	score_text: class extends self.ITextInstance {},
	respawn_set1: class extends self.ISpriteInstance {},
	respawn_point: class extends self.ISpriteInstance {},
	respawn_set2: class extends self.ISpriteInstance {},
	respawn_set3: class extends self.ISpriteInstance {},
	respawn_set4: class extends self.ISpriteInstance {},
	victory_set: class extends self.ISpriteInstance {},
	i_win: class extends self.ISpriteInstance {},
	finish_banner: class extends self.I3DShapeInstance {},
	game_icon: class extends self.ISpriteInstance {},
	fire_effect: class extends self.ISpriteInstance {},
	fire_vinnette: class extends self.ISpriteInstance {},
	dead_icon: class extends self.ISpriteInstance {},
	tombol_depan: class extends self.ISpriteInstance {},
	tombol_belakang: class extends self.ISpriteInstance {},
	tombol_kanan: class extends self.ISpriteInstance {},
	tombol_kiri: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	tombol_lompat: class extends self.ISpriteInstance {},
	startButton: class extends self.ISpriteInstance {},
	respawnbutton: class extends self.ISpriteInstance {},
	winbutton: class extends self.ISpriteInstance {},
	textpointerlock: class extends self.ISpriteInstance {}
}