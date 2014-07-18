Services.StartTransaction "Performance"

'LOGIN
RunAction "Action1 [LogIn]", oneIteration


Window("Menú Principal").WaitProperty "enabled",true,25
Window("Menú Principal").Click 600,16 @@ hightlight id_;_790566_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Menú Principal").Move 371,108 @@ hightlight id_;_790566_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Menú Principal").WinButton("A&dministración de Clientes").Click @@ hightlight id_;_1183926_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Menú Principal Clientes").Move 364,130 @@ hightlight id_;_987300_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Menú Principal Clientes").WinButton("Alta de C&uentas").Check CheckPoint("Alta de C&uentas") @@ hightlight id_;_462930_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Menú Principal Clientes").WinButton("Alta de C&uentas").Click @@ hightlight id_;_462930_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Selección de Clientes").Move 346,125 @@ hightlight id_;_592888_;_script infofile_;_ZIP::ssf6.xml_;_
'NÚMERO DE CLIENTE
Window("Selección de Clientes").WinEditor("Nro. de Cliente:").Type DataTable("Cliente", dtLocalSheet)
Window("Selección de Clientes").WinButton("&Buscar").Click @@ hightlight id_;_788382_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Selección de Clientes").WinObject("Estado:").Click 217,47 @@ hightlight id_;_330560_;_script infofile_;_ZIP::ssf23.xml_;_
Window("Selección de Clientes").WinButton("&Seleccionar").Click @@ hightlight id_;_592108_;_script infofile_;_ZIP::ssf24.xml_;_
Window("Detalle de la Cuenta").Move 365,102 @@ hightlight id_;_528472_;_script infofile_;_ZIP::ssf25.xml_;_
'TIPO DE FACTURADOR
Window("Detalle de la Cuenta").WinComboBox("ComboBox_2").Select DataTable("Facturador", dtLocalSheet)
Window("Detalle de la Cuenta").Click 396,346 @@ hightlight id_;_397808_;_script infofile_;_ZIP::ssf31.xml_;_
Window("Detalle de la Cuenta").CaptureBitmap "C:\Automatización\COTA\Capturas\AltaCuenta\Cuenta.png", True
Reporter.ReportEvent micPass, "DetalleCta", "Funciona", "C:\Automatización\COTA\Capturas\AltaCuenta\Cuenta.png"
Window("Detalle de la Cuenta").WinButton("Con&firmar").Check CheckPoint("Con&firmar") @@ hightlight id_;_593556_;_script infofile_;_ZIP::ssf27.xml_;_
Window("Detalle de la Cuenta").WinButton("Con&firmar").Click @@ hightlight id_;_593556_;_script infofile_;_ZIP::ssf27.xml_;_
Window("Detalle de la Cuenta").WinButton("&Volver").Click @@ hightlight id_;_593482_;_script infofile_;_ZIP::ssf28.xml_;_

Services.EndTransaction "Performance"