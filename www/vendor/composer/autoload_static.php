<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit06eec62a3b497ef6d9d40dd311584178
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit06eec62a3b497ef6d9d40dd311584178::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit06eec62a3b497ef6d9d40dd311584178::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit06eec62a3b497ef6d9d40dd311584178::$classMap;

        }, null, ClassLoader::class);
    }
}
