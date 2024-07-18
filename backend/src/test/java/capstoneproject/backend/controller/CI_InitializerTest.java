package capstoneproject.backend.controller;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CI_InitializerTest {

    @Test
    void sum_shouldReturn45_WhenCalledWith12And33() {
        int a = 12;
        int b = 33;
        int expected = 45;
        int actual = CI_Initializer.sum(a, b);
        assertEquals(expected, actual);
    }
}