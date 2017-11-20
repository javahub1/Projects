package com.kgoos.app.utils;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.nio.charset.Charset;
@ConfigurationProperties(prefix = "spring.http.encoding")
public class HttpEncodingProperties {
    public static final Charset DEFAULT_CHARSET = Charset.forName("UTF-8");
    @Getter@Setter
    private Charset charset = DEFAULT_CHARSET;
    @Getter@Setter
    private boolean force = true;


}
