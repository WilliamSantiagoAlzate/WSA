<?php
//Declaracion de variables
$name = "Santi";
$edad = 22;
$jobs = [
  "PHP Developer",
  "Python Developer",
  "Devops"
];

$jugador = [
  "nombre" => "Messi",
  "Seleccion" => "Argentina",
  "Club" => "Barcelona"
];

$jugadores = [
  [
    "nombre" => "Messi",
    "Seleccion" => "Argentina",
    "Club" => "Barcelona"
  ],
  [
    "nombre" => "Cristiano",
    "Seleccion" => "Portugal",
    "Club" => "Juventus"
  ],
  [
    "nombre" => "Neymar",
    "Seleccion" => "Brasil",
    "Club" => "PSG"
  ]
];

//Condicionales
$var1 = 1;
if ($var1>2) {
  echo "es mayor que 2";
}else {
  echo "es menor que 2";
}

//Ciclos
$idx = 0;
do {
  $idx = $idx + 1;
} while ($idx < 3);

for ($i=0; $i < count($jobs); $i++) {
  // code...
}
//Comentario
var_dump($jobs[0]);
echo "Hola mundo";
 ?>
