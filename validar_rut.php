<?php
	
	function validarRut($rut) {
		if(!empty($rut)){
			$rut	= preg_replace('/[^k0-9]/i', '', $rut);
			$dv		= substr($rut, -1);
			$numero = substr($rut, 0, strlen($rut) - 1);
			$i		= 2;
			$suma	= 0;
			foreach (array_reverse(str_split($numero)) as $v) {
				if ($i == 8) $i = 2;

				$suma += $v * $i;
				++$i;
			}

			$dvr = 11 - ($suma % 11);
			if ($dvr == 11) $dvr = '0';
			if ($dvr == 10) $dvr = 'K';

			if ($dvr == strtoupper($dv)){
				return true;
			}else {
				return false;
			}
        }else {
            return false;
        }
	}

	$response	= validarRut($_POST['rut']);

	header('Content-Type: application/json');
	echo(json_encode($response));